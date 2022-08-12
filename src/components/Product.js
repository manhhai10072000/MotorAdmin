import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from '../api/admin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product() {
  const [list,setList] = useState([])
  useEffect(()=>{
    getMotor();
  },[]);
  const getMotor = async()=>{
    await axios.get('/motor')
    .then(resp=>setList(resp.data))
    .catch((err)=>console.log("err"))
    console.log(list)
  }
  const [id,setId]=useState()
  const [name,setName]=useState()
  const [cc,setCc]=useState()
  const [company,setCompany]=useState()
  const [kind,setKind]=useState()
  const [price,setPrice]=useState()
  const [imglink,setImgLink]=useState()

  const handleChange = async(e,motor)=>{
    e.preventDefault()
    setId(motor.id)
    setName(motor.name)
    setCc(motor.cc)
    setCompany(motor.company)
    setKind(motor.kind)
    setPrice(motor.price)
    setImgLink(motor.imglink)
  }
  const handleUpdate = async(e,motor)=>{
    e.preventDefault()
    await axios.put(`/motor/${id}`,{name,cc,company,kind,price,imglink})
    console.log(motor.id)
    .catch((err)=>console.log(err))
    getMotor();
    toast.success('Cập Nhật Thành Công', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  const handleDelete = async(e,motor)=>{
    e.preventDefault()
    await axios.delete(`/motor/${motor.id}`)
    console.log(id);
    toast.error('Xóa Thành Công', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    let deleteshow=list.filter((pr)=>{
      return pr.id !== motor.id
    })
    setList(deleteshow)
  }
  const [searchname,setSearchname] = useState('')
  const handleSearch = async(e)=>{
    await axios.get(`/motor?name=${searchname}`)
    .then(resp=>setList(resp.data))
    .catch(e=>console.log(e))
  }

  let showMotor = list.map((motor,index)=>{
   return <tr key={index}>
          <td>{motor.id}</td>
          <td>{motor.name}</td>
          <td>{motor.cc}</td>
          <td>{motor.company}</td>
          <td>{motor.kind}</td>
          <td>{motor.price}.VND</td>
          <td><img src={motor.imglink}></img></td>
   <td>
     <button>
       <i className="fa-solid fa-gear" onClick={(e)=>handleChange(e,motor)}/>
     </button>
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
    <div className="admin-product">
    <div className="top">
      <div className="controller">
        {/* <div class="addproduct">
                      <a href="">Thêm</a>
                  </div> */}
        <div className="search">
          <input type="text" onChange={(e)=>setSearchname(e.target.value)}/>
          <button onClick={(e)=>handleSearch(e)}>
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
    </div>
    <div className="product">
      <div className="view">
        <h1>Sản Phẩm</h1>
        <div className='addproduct'><Link to='/add'><i class="fa-solid fa-plus"></i>  Thêm SP</Link></div>
        <div className="detail-container">
          <div className="detail">
            <p>ID</p>
            <input type="text" className="input-id" value={id} onChange={(e)=>setId(e.target.value)}/>
          </div>
          <div className="detail">
            <p>Tên</p>
            <input type="text" className="input-name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="detail">
            <p>Phân Khối</p>
            <input type="text" className="input-cc"value={cc} onChange={(e)=>setCc(e.target.value)} />
          </div>
          <div className="detail">
            <p>Hãng</p>
            <input type="text" className="input-company" value={company} onChange={(e)=>setCompany(e.target.value)}/>
          </div>
          <div className="detail">
            <p>Loại</p>
            <input type="text" className="input-type" value={kind} onChange={(e)=>setKind(e.target.value)}/>
          </div>
          <div className="detail">
            <p>Giá Tiền</p>
            <input type="text" className="input-price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </div>
          <div className="detail">
            <p>Ảnh</p>
            <input type="text" className="input-img" value={imglink} onChange={(e)=>setImgLink(e.target.value)}/>
          </div>
          <img className='product-img' src={imglink}></img>
          <button onClick={(e)=>handleUpdate(e)}>Xác Nhận</button>
          <ToastContainer />
        </div>
      </div>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Cc</th>
              <th>Hãng</th>
              <th>Loại</th>
              <th>Giá</th>
              <th>Ảnh</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
            {showMotor}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </>
  )
}

export default Product