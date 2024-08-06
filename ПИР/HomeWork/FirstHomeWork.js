const util = (fn, {
    delay = 1000,
    delaySinceCompetition = false,
    waitForPrevious = false, 
    queueLimit = Infinity
}) => {

    let queue = [];
    let isRunning = false;
    let lastCompetitionTime = 0;
    let lastEventTime = 0;

    const startNewFunction = async () => {
        if (queue.length === 0 || (waitForPrevious && isRunning)){
            return
        }

        const currentTime = Date.now();
        const timeSinceLastEventStart = delaySinceCompetition ? currentTime - lastEventTime : currentTime - lastEventTime; 

        if(timeSinceLastEventStart < delay){
            setTimeout(startNewFunction, delay - timeSinceLastEventStart);
            return
        }

        const {resolve, args} = queue.shift();
        isRunning = true;
        lastEventTime = Date.now();

        try{
            const result = await fn(...args);
            lastCompetitionTime = Date.now();
            resolve(result)
        }
        catch(err) {
            resolve(Promise.reject(err))
        }
        finally{
            isRunning = false;
            startNewFunction();
        }
    };

    return function (...args){
        return new Promise((resolve, reject) => {
            if(queue.length >= queueLimit){
                reject(new Error("Лимит очереди исчерпан"));
                return
            }

            queue.push({resolve, args});
            startNewFunction();
        })
    }
};

const someFunction = async(value) => {
    console.log(`Функция ${value} началась.`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Функция ${value} закончена.`);
    return value;
}

const g  = util(someFunction, {
    delay: 5000,
    delaySinceCompetition:true,
    waitForPrevious:true,
    queueLimit:5
});

g("Первая");
g("Вторая");
g("Третья");
g("Четвертая");