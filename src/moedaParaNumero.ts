export default function moedaParaNumero(num: string) {
  const spliceNum = num.split(',')

  if(num === "-") {
    return null
  }

  return Number(`${spliceNum[0].replace('.', '')}.${spliceNum[1]}`)
}