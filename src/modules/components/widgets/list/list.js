import React from 'react';
import { Row, Col, Pagination } from 'antd';
import Column from '../column/column';

const PAGE_SIZE_OPTIONS = [
  '25',
  '50',
  '75',
  '100',
];

const List = ({ cards, onChangePageSize, onChangePage, onShowModal, params, totalCount }) => {
  return (
    <div>
      <Row>
        {
          cards.map(card => (
            <Column
              style={{ width: 240 }}
              key={card.id}
              card={card}
              onShowModal={onShowModal}
            >
              <div className="custom-image">
                <img alt={card.name} width="100%" src={card.imageUrl} />
              </div>
            </Column>
          ))
        }
      </Row>
      <Row>
        <Col>
          <Pagination
            showSizeChanger
            onShowSizeChange={(page, pageSize) => onChangePageSize(params, page, pageSize)}
            onChange={(page, pageSize) => onChangePage(params, page, pageSize)}
            defaultCurrent={params.page}
            total={Number(totalCount)}
            defaultPageSize={params.pageSize}
            pageSizeOptions={PAGE_SIZE_OPTIONS}
          />
        </Col>
      </Row>
    </div>
  );
};

export default List;
