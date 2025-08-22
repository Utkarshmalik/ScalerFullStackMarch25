

import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser, ResetPasswordAPI } from '../../api/auth';

function ResetPassword(){


    const navigate = useNavigate();

    const onFinish= async (values)=>{

       
    const request = {
            otp:values.otp,
            password:values.password
    }


     const response = await ResetPasswordAPI(request);
     console.log(response);

       if(response.success){
            message.success(response.message);
            navigate("/login");
        }else{
            message.error(response.message);
        }


    }


    return <div className='App-header' > 

        <div>

            <main className='border text-center mw-500 px-3'>

                <section>
                    <h1> Reset Password </h1>
                </section>


                <section>

                <Form layout='vertical' name="basic"   onFinish={onFinish} >
                <Form.Item
                label="OTP"
                name="otp"
                rules={[{ required: true, message: 'OTP is Required!' }]}
              
                >
                <Input type='number' placeholder='Enter your OTP' id='otp'  />
                </Form.Item>

                <Form.Item
                label="New Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input type='password' id='password' placeholder='Enter your Password' />
                </Form.Item>


                <Form.Item>
                <Button style={{fontSize:"1rem"}}  block type="primary" htmlType="submit">
                    Reset Password 
                </Button>
                </Form.Item>
            </Form>

            <p> New User ?  
                
                <Link to="/register" >
                 Register Here
                </Link>
                
            </p>


            <p> Forget Password ?  
                
                <Link to="/forget" >
                 Reset Password
                </Link>
                
            </p>


                   
                </section>




            </main>

        </div>

    </div>

   
}

export default ResetPassword;