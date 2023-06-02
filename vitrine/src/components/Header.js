import "./Header.css"

const Header = ({ title }) => {
    return (
        <div className='headerContainer'>
            {title}
        </div>
    );
}

export default Header;