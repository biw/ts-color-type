import * as fs from 'fs'

const logger = fs.createWriteStream('index.d.ts')

logger.write('export const HexColorType = \n')

const genList = () => {
    let bufff = ''
    for(let col=0x0; col<=0xFFFFFF; col++) {
    bufff += `| '#${col.toString(16).padStart(6, '0')}'\n`

    if (col % 1000 === 0) {
        logger.write(bufff)
        bufff = ''
    }
    }
    if (bufff !== '') {
        logger.write(bufff)
        
    }
}

console.log('started generating `ts-color-type`')
const list = genList()
console.log('finished generating `ts-color-type`')

logger.end()