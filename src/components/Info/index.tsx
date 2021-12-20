import {FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getItem } from "../../store/actions/index";
import { ISelectedItem } from "../../store/reducers";

import './styles.scss';

type Props = {
  selectedItem: ISelectedItem,
  getItem: (id?: string) => void;
};

const ConnectedInfo: FC<Props> = props => {
    const { selectedItem, getItem  } = props;
    const params = useParams<{id?: string}>();

    useEffect(() => {
      getItem(params.id);
    },[getItem, params.id]);

    return (
        <div className="info">
            <h1 className="info__title">{`Detailed Info about ${selectedItem.name}`}</h1>
            <div className="info__media">
              <img src={selectedItem.img} alt={selectedItem.name} className="info__img"/>
            </div>
            <h3>{"Birthday:"}</h3>
            <div className="info__birthday">
                {selectedItem.birthday !== "Unknown" ? selectedItem.birthday : 'unknown'}</div>
            <h3>{selectedItem.occupation && "Occuptation:"}</h3>
            <div className="info__occupation-list-wrapper">
                <ul className="occupation-list">
                    {
                        selectedItem.occupation && selectedItem.occupation.map(item => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <h3>{"List of seasons that the character appeared in:"}</h3>
            <div className="info__appereance">
              {
                selectedItem.appearance && selectedItem.appearance.map(item => <div key={item}>{item}</div>)
              }
            </div>
        </div>
    )
}

function mapStateToProps(state: {selectedItem: ISelectedItem}): {selectedItem: ISelectedItem} {
  return {
    selectedItem: state.selectedItem
  };
}

const mapDispatchToProps = () => {
  return {
    getItem
  };
};

const Info = connect(
  mapStateToProps,
  {getItem}
)(ConnectedInfo);

export default Info;