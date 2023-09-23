import { Table } from "antd"
import { ColumnsType } from "antd/es/table";
import { CategoryList as CategoryInfo } from "../../types";

interface Props {
    data?: CategoryInfo[];
    columns: ColumnsType<CategoryInfo>;
}

const CategoryList = ({ data = [], columns }: Props) => {
    const pagination = {
        pageSize: 5,
        total: data.length
    }
    return (
        <Table columns={columns} dataSource={data} pagination={pagination} />
    )
}

export default CategoryList;