import Header from '../../PageHeader';

const DefaultLayout = (props) => {
  return (<div>
    <Header />
    {props.children}
  </div>)
}

export default DefaultLayout;