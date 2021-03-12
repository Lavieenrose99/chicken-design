/*
 * @Author: your name
 * @Date: 2021-03-07 13:33:02
 * @LastEditTime: 2021-03-10 11:21:20
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
        axios.get(' http://d2cae647202e.ngrok.io/list').then(({ data }) => {
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
        <div
        className="comment-list-chicken" >
        <h2 className="loading-h2-of-commnet">加载中<i className="first-waiting-icon">。</i>
        <i className="first-waiting-icon">。</i>
        <i className="first-waiting-icon">。</i></h2>
        </div> :
        <ol>{

            commentList.map(item => (
                <>
           <div className="comment-list-chicken-item" >
               <div className="comment-list-chicken-item-contianer">
               <img className="avator-comment" alt="头像" src="https://cdn.jsdelivr.net/gh/Lavieenrose99/IvanPictureHouse/ivan-pic默认头像.png
" ></img><p className="comment-list-chicken-item-content">{item.data}</p></div><div >
{timetrans(item.time)}</div></div><div className="title-flex"></div>
                </>
                ))
        }</ol>}
        </>
    )
}

export default Comment
