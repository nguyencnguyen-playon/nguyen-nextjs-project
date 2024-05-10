'use client';
import { useRouter } from 'next/navigation';
import { LayoutContent } from '@/components/LayoutContent';
import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { PostFormType } from '@/interfaces';
import { createPosts } from '@/services';

const Wrapper = styled.div`
    display: flex;  
    flex:1;
    flex-wrap: wrap;
    justify-content: center;
    background: #F7FAFC;
    overflow: auto;
    margin-top: 32px;
`

export const CreatePosts = () => {
    const router = useRouter();

    const handleCreate = async (data: PostFormType) => {
        await createPosts(data);
        router.push('/');
    };

    return (
        <LayoutContent>
            <Wrapper>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={handleCreate}
                    autoComplete="off"
                >
                    <Form.Item<PostFormType>
                        label="Username"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<PostFormType>
                        label="Description"
                        name="desc"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Wrapper>
        </LayoutContent>
    );
};

