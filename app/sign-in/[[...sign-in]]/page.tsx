'use client';
import { LayoutContent } from "@/components/LayoutContent";
import { SignIn } from "@clerk/nextjs";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background: #F7FAFC;
    flex: 1;
    justify-content: center;
`

export default function Page() {
    return <LayoutContent>
        <Container>
            <SignIn path="/sign-in" />
        </Container>
    </LayoutContent>;
}