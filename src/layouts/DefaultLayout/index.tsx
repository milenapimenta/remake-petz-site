import { HeartOutlined, PhoneOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import styles from './styles.module.css';

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
  {
    label: 'Cachorro',
    key: 'dog',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    label: 'Gato',
    key: 'cat',
  },
  {
    label: 'Pássaro',
    key: 'bird',
  },
  {
    label: 'Peixe',
    key: 'fish',
  },
  {
    label: 'Outros pets',
    key: 'others',
  },
  {
    label: 'Casa e Jardim',
    key: 'house',
  },
  {
    label: 'Promoções',
    key: 'sales',
  },
  {
    label: 'Serviços',
    key: 'services',
  },
  {
    label: 'Clubz',
    key: 'clubz',
  },
  {
    label: 'Recompra',
    key: 'buy',
  },
];

function DefaultLayout() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.menu}>
          <div>
            <img src="src/assets/logo-petz-primary.svg" alt="avatar" />
          </div>
          <div>
            <Input
              className={styles.inputSearch}
              size="large"
              placeholder="O que o seu pet precisa?"
              prefix={<SearchOutlined className={styles.iconSearch} />}
            />
          </div>
          <div className={styles.listGroup}>
            <ul className={styles.list}>
              <li>
                <PhoneOutlined />
              </li>
              <li>
                <HeartOutlined />
              </li>
              <li>
                <ShoppingOutlined />
              </li>
              <li>
                <UserOutlined className={styles.iconUser} />
                <div>
                  <h6>Entrar</h6>
                  <p>cadastre-se</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.secondaryNav}>
        <Menu className={styles.submenu} mode="horizontal" items={items}/>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default DefaultLayout;
