/*
 * @Author: your name
 * @Date: 2021-03-07 13:33:02
 * @LastEditTime: 2021-03-07 14:25:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Input/comment.tsx
 */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from '../Input'
import Button from '../Button'


const Comment = () => {
       const [comment, setComment] = useState('')
       const [commentList, setCommentList] = useState([])
       useEffect(() => {
        axios.get('http://10.19.65.200:7004/list').then(({ data }) => {
             setCommentList(data.data)
        })
    }, [])
    return (
        <>
        <Input
         style={{ display: 'inline-block', width: '60%' }}
        onChange={e => setComment(e.target.value)} ></Input>
        <Button
        style={{ marginLeft: '30px' }}
        onClick={
            () => axios.post('http://10.19.65.200:7004/home', { data: comment, url: 'www.ivannwww.com' })
        }>评论</Button>
        <ol>{

            commentList.map(item => (
                    <li>{item.data}</li>
                ))
        }</ol>
        </>
    )
}

export default Comment
