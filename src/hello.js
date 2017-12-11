/**
 * @author yanxiaodi
 * @email 929213769@qq.com
 * @create date 2017-10-07 10:16:57
 * @modify date 2017-10-07 10:16:57
 * @desc 测试 Flow 与 Standard
 * @flow
*/

function square (n: number): number {
  return n * n
}

// square('2') // 检查 flow 纠错功能 => 成功发现 类型错误!

// let a = '1'; // 检查 eslint - standard 纠错功能 => 成功发现 语法错误!
