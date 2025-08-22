
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { ForgetPasswordAPI } from '../../api/auth';

function ForgetPassword(){


    const navigate = useNavigate();

    const onFinish= async (values)=>{

        const request = {email:values.email};

        
        const response = await ForgetPasswordAPI(request);
        console.log(response);

            if(response.success){
            message.success(response.message);
            navigate("/reset");
        }else{
            message.error(response.message);
        }


    }


    return <div className='App-header' > 

        <div>

            <main className='border text-center mw-500 px-3'>

                <section>
                    <h1> Forget Password </h1>
                </section>


                <section>

                <Form layout='vertical' name="basic"   onFinish={onFinish} >
                <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Email is Required!' }]}
              
                >
                <Input type='email' placeholder='Enter your email' id='email'  />
                </Form.Item>

          

                <Form.Item>
                <Button style={{fontSize:"1rem"}}  block type="primary" htmlType="submit">
                    Send OTP
                </Button>
                </Form.Item>
            </Form>

            <p> Existing User ?  
                
                <Link to="/login" >
                 Login Here
                </Link>
                
            </p>



                   
                </section>




            </main>

        </div>

    </div>
    

}

export default ForgetPassword;