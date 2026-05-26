import { page } from "./style.css";

const Page = ({ children }: { children: React.ReactNode }) => {
    return (<div className={page}>
        {children}
    </div>)
}

export default Page;