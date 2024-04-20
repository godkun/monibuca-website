import { requestAI } from './request-ai.js'
import fs from 'fs'
import path from 'path'
function getFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // 如果是目录，则递归调用函数
      getFilesRecursively(filePath, fileList)
    } else if (file.endsWith('data.source.jsx')) {
      // 如果是文件，并且文件名以'data.source.jsx'结尾，则添加到列表中
      fileList.push(filePath)
    }
  }

  return fileList
}

const srcDir = path.resolve(process.cwd(), 'src')
let files = getFilesRecursively(srcDir)
// 需要单独指定文件则调整
// files = files.slice(5, 6);
const lang = 'English'
// const lang = "Japanese"
console.log(files)

files.map(async file => {
  const fileContent = fs.readFileSync(file, 'utf8')
  let prompt = `
### instruction ###
Translate the Chinese content in the following text into ${lang} \n
Text: "${fileContent}"
output:
1、with no introduction, no explaintation
2、用 Monibuca 替换中文 "不卡"
`
  requestAI(prompt, {
    onData(data) {
      console.log('🚀 ~ onData ~ data:', data)
    },
    onEnd(data) {
      const regex = /\`\`\`.*?\n([\s\S]*?)\`\`\`/
      const match = data.match(regex)

      if (match) {
        const extracted = match[1].trim() // 去除前后的空白字符
        console.log(extracted) // 输出: "xxx"
        fs.writeFile(file, extracted, 'utf8', err => { })
      } else {
        fs.writeFile(file, data, 'utf8', err => { })
      }
    },
    onError(err) {
      console.log('🚀 ~ onError ~ err:', err)
    }
  })
})
