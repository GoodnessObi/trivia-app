// import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

type PaginationProps = {
	totalItems: number;
	itemsPerPage?: number;
	currentPage: number;
	onChange: (value: number) => void;
};

const Pagination = ({
	totalItems,
	itemsPerPage,
	currentPage,
	onChange,
}: PaginationProps) => {
	// const [itemOffset, setItemOffset] = useState(0);
	const itemsOnDisplay = itemsPerPage ? itemsPerPage : 10;
	// const endOffset = itemOffset + itemsOnDisplay;
	// console.log(`Loading items from ${itemOffset} to ${endOffset}`);

	const pageCount = Math.ceil(totalItems / itemsOnDisplay);

	const handlePageClick = ({ selected }: { selected: number }) => {
		// (page - 1) * itemsPerPage + 1
		// const newOffset = (selected + 1) * itemsOnDisplay + 1;
		// console.log(
		// 	`User requested page number ${selected}, which is offset ${newOffset}`
		// );

		// setItemOffset(newOffset);
		onChange(selected + 1);
	};

	return (
		<PaginationWrapper>
			<ReactPaginate
				breakLabel='...'
				nextLabel='next >'
				onPageChange={handlePageClick}
				initialPage={currentPage - 1}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
				pageClassName='page-item'
				pageLinkClassName='page-link'
				previousClassName='page-item prev'
				previousLinkClassName='page-link'
				nextClassName='page-item next'
				nextLinkClassName='page-link'
				breakClassName='page-item'
				breakLinkClassName='page-link'
				className='pagination'
				activeClassName='active'
			/>
		</PaginationWrapper>
	);
};

const PaginationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0;

	.pagination {
		display: flex;
		list-style-type: none;
		align-items: center;
		padding: 0;
		margin: 0;
		margin-bottom: 20px;

		.page-item {
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;
			color: rgba(84, 95, 125, 0.6);
			margin-left: 20px;
			cursor: pointer;

			&.next,
			&.prev {
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgba(33, 63, 125, 0.1);
				border-radius: 4px;
				color: #213f7d;
				padding: 6px;
				// width: 24px;
				height: 24px;
			}

			&:hover,
			&.active {
				color: #545f7d;
			}
		}
	}
`;

export default Pagination;
