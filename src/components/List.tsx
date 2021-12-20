import {FC, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../store/actions/index";

type Props = {
  items: Array<any>,
  isError: boolean,
  getData: () => void;
};

const ConnectedList: FC<Props> = props => {
  const {items, isError, getData} = props;

  useEffect(() => {
    getData();
  },[getData]);

  return (
    <>
      {
        !isError ? 
        <div>
          <h1>The Breaking Bad characters: </h1>
          <ul>
            {items.map(el => (
              <Link to={`/item/${el.char_id}`} 
                    key={el.char_id}>
                {el.name}<br/>
              </Link>
            ))}
          </ul>
        </div> : <p>Sorry, something went wrong...Please try again.</p>
      }
    </>
  )
};

function mapStateToProps(state: {items: Array<any>, isError: boolean}) {
  return {
    items: state.items,
    isError: state.isError
  };
}

const List = connect(
  mapStateToProps,
  { getData }
)(ConnectedList);

export default List;