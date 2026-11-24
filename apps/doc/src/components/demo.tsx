import { Button, Input } from '@dingshaohuax/ui-react'

export default function Demo() {
  return (
    <div className="demo-grid">
      <section className="demo-card" aria-labelledby="button-heading">
        <div className="demo-card-heading">
          <h2 id="button-heading">按钮</h2>
          <code>Button</code>
        </div>
        <div className="demo-preview">
          <div className="demo-buttons">
            <Button>默认按钮</Button>
            <Button type="primary">主按钮</Button>
            <Button disabled>禁用按钮</Button>
          </div>
        </div>
      </section>

      <section className="demo-card" aria-labelledby="input-heading">
        <div className="demo-card-heading">
          <h2 id="input-heading">输入框</h2>
          <code>Input</code>
        </div>
        <div className="demo-preview">
          <label className="demo-field">
            用户名
            <Input placeholder="请输入用户名" />
          </label>
        </div>
      </section>
    </div>
  )
}
