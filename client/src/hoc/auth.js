import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'
import { useNavigate } from 'react-router-dom'

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch()
        const navigate = useNavigate()

        useEffect(() => {
            dispatch(auth())
                .then(response => {
                    console.log(response)
                    if (!response.payload.isAuth) {
                        //로그인 하지 않은 상태 
                        if (option === true) {
                            navigate('/login')
                            alert("로그인이 필요합니다.")
                        }
                    } else {
                        //로그인 한 상태
                        if (adminRoute && !response.payload.isAdmin) {
                            navigate('/')
                            alert("권한이 없습니다.")
                        } else {
                            if(option === false){
                                navigate('/')
                                alert("이미 로그인 하였습니다.")
                            }
                        }

                    }


                })
        }, [])

        return (
            <SpecificComponent />
        )
    }

    return <AuthenticationCheck />
}