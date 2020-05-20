<template>
  <el-table
    :data="list"
    style="width: 100%;padding-top: 15px;"
  >
    <el-table-column
      label="Order_No"
      min-width="200"
    >
      <template slot-scope="scope">{{ scope.row.order_no | orderNoFilter }}</template>
    </el-table-column>
    <el-table-column
      align="center"
      label="Price"
      width="195"
    >
      <template slot-scope="scope">¥{{ scope.row.price | toThousandFilter }}</template>
    </el-table-column>
    <el-table-column
      align="center"
      label="Status"
      width="100"
    >
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">{{ row.statuss }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    statusForm(status) {

    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        const listData = JSON.parse(JSON.stringify(response.data.items.slice(0, 8)))
        for (const item of listData) {
          if (item.status === 'success') {
            item.statuss = '完成'
          }
          if (item.status === 'pending') {
            item.statuss = '进行中'
          }
        }
        this.list = listData
      })
    }
  }
}
</script>
