/*
 * @Author: your name
 * @Date: 2021-03-07 13:33:02
 * @LastEditTime: 2021-03-07 18:52:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Input/comment.tsx
 */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from '../Input'
import Button from '../Button'
import Icon from '../Icon'


const Comment = () => {
       const [comment, setComment] = useState('')
       const [commentList, setCommentList] = useState([])
       const [update, setUpdata] = useState(false)
       useEffect(() => {
        axios.get(' http://18e8b5254618.ngrok.io/list').then(({ data }) => {
             setCommentList(data.data)
        })
    }, [update])

    function timetrans(dateraw) {
        const date = new Date(dateraw * 1);// 如果date为13位不需要乘1000
        const Y = `${date.getFullYear()}-`;
        const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
        const D = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} `;
        const h = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`;
        const m = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:`;
        const s = (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());
        return Y + M + D + h + m + s;
    }
    return (
        <>
        <Input
         style={{ display: 'inline-block', width: '60%' }}
        onChange={e => setComment(e.target.value)}
        value={comment} ></Input>
        <Button
        style={{ marginLeft: '30px' }}
        onClick={
            () => {
           axios.post(' http://18e8b5254618.ngrok.io/home',
            { data: comment, time: Date.now() }).then(() => {
               setUpdata(!update)
               setComment('')
           })
}
        }>评论</Button>
        {!commentList.length ?
        <div style={{ textAlign: 'center' }}>
        <Icon icon="spinner" size="4x" spin />
        </div> :
        <ol>{

            commentList.map(item => (
            <div><li>{item.data}<span style={{ float: 'right' }}>
                {timetrans(item.time)}</span></li></div>
                ))
        }</ol>}
        </>
    )
}

export default Comment
