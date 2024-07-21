<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-divider style="margin-bottom: 32px" />

      <s-table style="margin-bottom: 24px" row-key="id" :columns="scheduleColumns" :data="loadScheduleData">
        <!-- <template slot="status" slot-scope="status">
          <a-badge :status="status" :text="status | statusFilter" />
        </template> -->
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { STable } from '@/components'
import { mapActions, mapState } from 'vuex'
import { computed } from 'vue'

export default {
  components: {
    STable,
  },
  data() {
    return {
      data: [],
      scheduleColumns: [
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'key',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: '值',
          dataIndex: 'value',
          key: 'value',
        },
      ],
      loadScheduleData: () => {
        return new Promise((resolve) => {
          const data = this.$store.state.system.dictinfo
          console.log('data:', this.data)

          resolve({
            data: data,
            pageSize: 10,
            pageNo: 1,
            totalPage: data.length / 10,
            totalCount: data.length,
          })
        }).then((res) => {
          return res
        })
      },
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        processing: '进行中',
        success: '完成',
        failed: '失败',
      }
      return statusMap[status]
    },
  },
  computed: {
    title() {
      console.log('computed commut')
      console.log('this:', this)
      return this.$route.meta.title
    },
    // mapState(){

    // }
  },
  methods: {
    ...mapActions(['GetSetting']),
  },
  mounted() {
    // 实例挂载到DOM后执行外部资源加载
    // 例如，加载外部图片或脚本
    // 这里可以使用this.$el来操作DOM
    this.GetSetting({ name: 'KEYS', key: 'yesCaptcha' })
    console.log('this.$:', this)
  },
}
</script>

<style lang="less" scoped>
.title {
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
