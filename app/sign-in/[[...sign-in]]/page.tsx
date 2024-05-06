import { LayoutContent } from "@/components/LayoutContent";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return <LayoutContent>
        <SignIn path="/sign-in" />
    </LayoutContent>;
}