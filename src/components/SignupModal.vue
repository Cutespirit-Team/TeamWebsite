<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">註冊</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark">
          <form class="row justify-content-center">
            <!-- <div class="col-md-6"> -->
              <div class="input-group mb-3">
                <!-- <label for="inputPassword">密碼</label> -->
                <input
                  type="text"
                  class="form-control"
                  placeholder="姓氏"
                  aria-label="姓氏"
                  v-model="lastName"
                />
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="名字"
                  aria-label="名字"
                  v-model="firstName"
                />
              </div>
              <div class="input-group mb-3">
                <!-- <label for="inputPassword">密碼</label> -->
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="使用者名稱"
                  aria-label="使用者名稱"
                  v-model="username"
                />
                <label class="input-group-text" for="inputGroupSelect01">性別</label>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected :disabled="true">嘿嘿</option>
                  <option value="man">男森</option>
                  <option value="girl">女森</option>
                </select>
              </div>
                <div class="mb-2">
                <label for="inputEmail" >電子郵件</label>
                <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                    v-model="user.email"
                />
                </div>
                <div class="mb-2">
                <label for="inputPassword">密碼</label>
                <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                    v-model="user.password"
                />
                </div>
              <div class="mb-2">
                <label for="inputPassword">重新輸入密碼</label>
                <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                    v-model="user.re_password"
                />
              </div>
            <!-- </div> -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-primary" @click="$refs.SignupError.showToast()">註冊</button>
        </div>
      </div>
    </div>
  <Notification ref="SignupError" title="註冊錯誤！" msg="功能尚未完成" time="現在"></Notification>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import Notification from './ToastNotification.vue'
export default {
  name: 'SignupModal',
  components: {
    Notification
  },
  data () {
    return {
      modal: {},
      user: {
        username: '',
        email: '',
        password: '',
        re_password: '',
        first_name: '',
        last_name: '',
        gender: '',
        birth: ''
      }
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
