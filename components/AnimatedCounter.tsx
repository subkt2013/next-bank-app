//エラーが出たので、別ファイルに切り出した。
//エラーの対処のため、"use client"ディレクティブを書いた。
//ファイルの先頭に追加することで、そのファイル内のコンポーネントはクライアントサイドでレンダリングされることが保証されます。
'use client';

import React from 'react';
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        decimals={2}
        decimal=","
        prefix='$'
        end={amount} />
    </div>
  )
}

export default AnimatedCounter