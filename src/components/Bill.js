import React, { useEffect, useState } from 'react'
import axios from '../api/admin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Bill() {
    const [list,setList] = useState([])
    useEffect(()=>{
        getMotor();
    },[])
    const getMotor=async()=>{
      await axios.get('/shoppingcard')
      .then((resp)=>setList(resp.data))
      .catch((err)=>console.log(err))
    }
    const [id,setId]=useState()
    const [name,setName]=useState()
    const [district,setDistrict]=useState()
    const [ward,setWard]=useState()
    const [street,setStreet]=useState()
    const [bill,setBill]=useState()
    const [subTotal,setSubTotal]=useState()
    const [namemotor,setNamemotor]=useState()
    
    const handleDelete = async(e,motor)=>{
      e.preventDefault();
      await axios.delete(`/shoppingcard/${motor.id}`)
      toast.success('Xóa Thành Công', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      const deleteShow=list.filter((pr)=>{
        return pr.id !== motor.id
      })
      setList(deleteShow)
    }
    let showList = list.map((motor,index)=>{
            return <tr key={index}>
            <td>{motor.id}</td>
            <td>{motor.name}</td>
            <td>{motor.district}</td>
            <td>{motor.ward}</td>
            <td>{motor.street}</td>
            <td>{motor.subTotal}</td>
            <td>{motor.namemotor.join('-')}</td>
            <td>
              <button>
                {" "}
                <i className="fa-solid fa-gear" />
              </button>{" "}
            </td>
            <td>
              <button>
                {" "}
                <i className="fa-solid fa-dumpster" onClick={(e)=>handleDelete(e,motor)}/>
              </button>{" "}
            </td>
          </tr>
    })
  return (
    <>
    <div className='bill'>
    <div className='top-bill'></div>
    <div className="product-bill">
        <div className="table-bill">
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>SĐT</th>
              <th>Thành phố/Tỉnh</th>
              <th>Quận/Huyện</th>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
            {showList}
            <ToastContainer />
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </>
  )
}


export default Bill