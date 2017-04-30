// import Link from 'next/link';
import {Link} from '../../routes'

const PageHeader = () => {
  return (
    <div>
      <Link route="index">
        <a>Home</a>
      </Link>
      <Link route="todos">
        <a>Todos</a>
      </Link>
      <Link route="about">
        <a>About</a>
      </Link>
    </div>)
}

export default PageHeader;