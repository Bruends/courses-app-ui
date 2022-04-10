import { Spinner, Container, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Loading (){
  const { loading } = useSelector(state => state.coursesReducer);
  console.log(loading)
  return (
    <>
      {loading ? (
        <Stack>
          <Spinner className="mx-auto p-4 m-5" animation="border" role="status" variant="primary"  />
        </Stack>
      ): null}
    </>
  )
}

export default Loading;