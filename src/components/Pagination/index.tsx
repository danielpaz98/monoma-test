import { useState, useEffect } from "react";
// STYLES
import Styles from "./styles";
// ICONS
import { ReactComponent as IconDoubleArrowLeft } from "~/assets/icons/left-double-arrow.svg";
import { ReactComponent as IconArrowLeft } from "~/assets/icons/left-arrow.svg";
import { ReactComponent as IconDoubleArrowRight } from "~/assets/icons/right-double-arrow.svg";
import { ReactComponent as IconArrowRight } from "~/assets/icons/right-arrow.svg";

interface ParamsOnChangePage {
	offset: number;
	currentPage: number;
}

export interface IProps {
	className?: string;
	pages?: number;
	itemsPerPage?: number;
	limit?: number;
	position?: "left" | "right" | "center";
	showTotalPages?: boolean;
	onChangePage?: ({ offset, currentPage }: ParamsOnChangePage) => void;
}

const Pagination = ({
	pages = 0,
	itemsPerPage = 10,
	limit = 5,
	position = "left",
	showTotalPages = true,
	className,
	onChangePage,
}: IProps = {}) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(pages / itemsPerPage);

	const midRange = limit > 2 ? Math.round(limit / 2) - 1 : limit;

	const counter =
		limit > 2
			? currentPage > midRange && totalPages >= limit
				? Math.min(currentPage - midRange, totalPages - (limit - 1))
				: 1
			: Math.min(currentPage, totalPages - (limit - 1));

	const _limit = totalPages >= limit ? limit : totalPages;

	const indexButtons = Array(_limit)
		.fill(null)
		.map((_, i) => i + counter);

	const nextPage = (): void => setCurrentPage((curr) => Math.min(curr + 1, totalPages));

	const previousPage = (): void => setCurrentPage((curr) => Math.max(curr - 1, 1));

	useEffect(() => {
		onChangePage?.({ offset: itemsPerPage * (currentPage - 1), currentPage });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, itemsPerPage]);

	return pages > 1 ? (
		<Styles.Pagination className={className} position={position}>
			{showTotalPages && (
				<Styles.TotalPages>
					Página {currentPage}/{totalPages}
				</Styles.TotalPages>
			)}

			<Styles.Controls>
				<Styles.Button disabled={currentPage === 1} type="button" onClick={() => setCurrentPage(1)}>
					<IconDoubleArrowLeft className="pointer-events-none" fill="currentColor" height={12} width={12} />
				</Styles.Button>

				<Styles.Button disabled={currentPage === 1} type="button" onClick={previousPage}>
					<IconArrowLeft className="pointer-events-none" fill="currentColor" height={12} width={12} />
				</Styles.Button>

				<Styles.ControlsIndex>
					{indexButtons.map((index) => (
						<Styles.Button
							key={index}
							isSelected={currentPage === index}
							type="button"
							onClick={() => setCurrentPage(index)}
						>
							<span>{index}</span>
						</Styles.Button>
					))}
				</Styles.ControlsIndex>

				<Styles.Button disabled={currentPage === totalPages} type="button" onClick={nextPage}>
					<IconArrowRight className="pointer-events-none" fill="currentColor" height={12} width={12} />
				</Styles.Button>

				<Styles.Button disabled={currentPage === totalPages} type="button" onClick={() => setCurrentPage(totalPages)}>
					<IconDoubleArrowRight className="pointer-events-none" fill="currentColor" height={12} width={12} />
				</Styles.Button>
			</Styles.Controls>
		</Styles.Pagination>
	) : null;
};

export default Pagination;
