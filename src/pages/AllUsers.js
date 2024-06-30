import React, { useEffect, useState } from 'react'
import summeryApi from '../common'
import { toast } from 'react-toastify';

const AllUsers = () => {
 
    const [allUsers, setAllUsers] = useState([])
    
    const fetchAllUsers = async () =>{
        const fetchData = await fetch(summeryApi.Allusers.url,{
            method: summeryApi.Allusers.method,
            credentials: 'include'
        })

        const dataResponse = await fetchData.json()

        if (dataResponse.success) {
          setAllUsers(dataResponse.data)
        }
        if (dataResponse.error) {
          toast.error(dataResponse.message)
        }
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

  return (
    <div className='bg-white pb-4'>
      <table  className='w-full userTable'>
        <thead>
          <tr>
          <th>Sr.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created Date</th>
          </tr>
          
        </thead>

        <tbody className=''>
          {
              allUsers.map((el,index)=>{
                return(
                  <tr>
                    <td>00{index+1}</td>
                    <td>{el?.name}</td>
                    <td>{el?.email}</td>
                    <td>{el?.role}</td>
                    <td>{el?.createdAt}</td>
                   
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers
