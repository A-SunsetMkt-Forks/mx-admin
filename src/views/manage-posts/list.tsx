import { defineComponent, onMounted, ref } from '@vue/runtime-core'
import { ContentLayout } from '../../layouts/content'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { RESTManager } from '../../utils/rest'
import { Pager, PostModel, PostResponse } from '../../models/post'
import Button from 'primevue/button'
import { RoundedButton } from '../../components/button'
import PostTable from '../../components/for-views/posts/list-table.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Paginator from 'primevue/paginator'
import { RouterLink } from 'vue-router'

export const ManagePostListView = defineComponent({
  name: 'post-list',
  setup({}, ctx) {
    const data = ref<PostModel[]>([])
    const pager = ref<Pager>({} as any)
    const fetchData = async (page = 1) => {
      const {
        data: $$,
        page: $_,
      } = await RESTManager.api.posts.get<PostResponse>({
        params: {
          page,
        },
      })
      data.value = $$
      pager.value = $_
    }
    onMounted(() => {
      fetchData()
    })

    return () => {
      return (
        <ContentLayout
          actionsElement={
            <RouterLink to={'/posts/edit'}>
              <RoundedButton variant="primary">
                <FontAwesomeIcon icon={faPlus} />
              </RoundedButton>
            </RouterLink>
          }
        >
          <PostTable
            data={data.value}
            pager={pager.value}
            onChange={(page) => {
              console.log(page)

              fetchData(page)
            }}
          />
        </ContentLayout>
      )
    }
  },
})