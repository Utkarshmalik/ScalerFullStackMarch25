
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';


function Login(){

    const onFinish=(values)=>{

        const {email, password} = values;

        const input = {
            email, 
            password
        };

        console.log(`Making an API call with input `, input);
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