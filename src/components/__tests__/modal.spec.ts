import Modal from '@/components/FormModal.vue'
import { mount } from '@vue/test-utils'

// 模拟 useFormModal 返回的数据
vi.mock('@/store', () => ({
	useFormModal: vi.fn().mockReturnValue({
		showModal: true,
	}),
}))

describe('Modal', () => {
	it('renders modal with header and actions', async () => {
		const wrapper = mount(Modal, {
			slots: {
				header: '<div>Test Header</div>',
				default: '<main>Test Content</main>',
				action: '<button>Test Action</button>',
			},
		})

		expect(wrapper.html()).toMatchInlineSnapshot(`
			"<n-modal show="true" preset="dialog" positive-text="确认" negative-text="取消">
			  <main>Test Content</main>
			</n-modal>"
		`)
	})

	it('emits confirm event when positive button clicked', async () => {
		const wrapper = mount(Modal)

		// 模拟点击确认按钮
		await wrapper
			.find('[positive-text="确认"]')
			.trigger('positive-click')

		// 断言是否正确触发了 confirm 事件
		expect(wrapper.emitted('confirm')).toBeTruthy()
	})

	it('emits cancel event when negative button clicked', async () => {
		const wrapper = mount(Modal)

		// 模拟点击取消按钮
		await wrapper
			.find('[negative-text="取消"]')
			.trigger('negative-click')

		// 断言是否正确触发了 cancel 事件
		expect(wrapper.emitted('cancel')).toBeTruthy()
	})
})
