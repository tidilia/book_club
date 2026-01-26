import './PageTitle.css';

function PageTitle({ children, size = "h1" }) {
    const Tag = size;
    return <Tag className="page-title">{children}</Tag>;
}

export default PageTitle;