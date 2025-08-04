import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../api/auth';

function Register(){

    const navigate = useNavigate();


    const onFinish= async (values)=>{

        const {email, password, name} = values;

        const input = {
            name,
            email, 
            password
        };

        console.log(`Making an Register API call with input `, input);

        const response = await RegisterUser(input);

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
                    <h1> Rsgister to BookMyShow</h1>
                </section>


                <section>

                <Form layout='vertical' name="basic"   onFinish={onFinish} >

                          <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Name is Required!' }]}
              
                >
                <Input type='text' placeholder='Enter your name' id='name'  />
                </Form.Item>


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
                    Register
                </Button>
                </Form.Item>
            </Form>

                        <p> Already a user ?
                            
                            
                            <Link to="/login">
                             Login now
                            </Link>


                        </p>

                   
                </section>




            </main>

        </div>

    </div>
    

}

export default Register;