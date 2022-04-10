import {Form} from 'react-bootstrap'; 

function Search({search, setSearch}) {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="pesquisar (título ou categoria)"
        className="me-2"
        aria-label="Search"
        value={search}
        onChange={({target}) => { setSearch(target.value) }}
      />
    </Form>
  )
}

export default Search;