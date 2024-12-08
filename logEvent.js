const { format } = require('date-fns');
const { v4:uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (msg) => {
    const dateTime = `${format(new Date(), 'MMddyyyy\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${msg}\n`;
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
    } catch (theseHands) {
        console.error(theseHands);
    }
}