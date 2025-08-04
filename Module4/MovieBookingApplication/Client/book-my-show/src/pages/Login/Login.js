
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../api/auth';


function Login(){

    const navigate = useNavigate();

    const onFinish= async (values)=>{


        const {email, password} = values;

        const input = {
            email, 
            password
        };

        console.log(`Making an API call with input `, input);

        const response = await LoginUser(input);

        console.log(response);

        if(response.success){
            message.success(response.message);
            navigate("/");
        }else{
            message.error(response.message);
        }
    }


    return <div className='App-header' > 

        <div>

            <main className='border text-center mw-500 px-3'>

                <section>
                    <h1> Login to BookMyShow</h1>
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

                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input type='password' id='password' placeholder='Enter your Password' />
                </Form.Item>


                <Form.Item>
                <Button style={{fontSize:"1rem"}}  block type="primary" htmlType="submit">
                    Login
                </Button>
                </Form.Item>
            </Form>

            <p> New User ?  
                
                <Link to="/register" >
                 Register Here
                </Link>
                
                 </p>


                   
                </section>




            </main>

        </div>

    </div>

}

export default Login;