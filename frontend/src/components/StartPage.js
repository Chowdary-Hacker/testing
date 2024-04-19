import {Link} from 'react-router-dom';
function StartPage(){
    return(<nav>
        <ul>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/parents">Parents Page</Link>
          </li>
        </ul>
      </nav>);
}
export default StartPage;