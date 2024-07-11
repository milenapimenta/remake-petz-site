import { CreditCardOutlined, FieldTimeOutlined, ReloadOutlined, ShopOutlined, TruckOutlined } from "@ant-design/icons";
import styles from './styles.module.css';
import { Carousel } from "antd";

function HomePage() {
  return (
    <>
      <div className={styles.assinaturaPetz}>
        <FieldTimeOutlined className={styles.iconTime} />
        <span>Assinatura Petz</span>
        <p>10% OFF agora</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.seres}>
          <img src="src/assets/seres.svg" alt="seres veterinários" />
        </div>
        <div className={styles.banho}>
          <img src="src/assets/banho-e-tosa.svg" alt="banho e tosa" />
        </div>
        <div className={styles.adestramento}>
          <img src="src/assets/adestramento.svg" alt="adestramento" />
        </div>
        <div className={styles.adote}>
          <img src="src/assets/adote-petz.svg" alt="adote petz" />
        </div>
        <div className={styles.blog}>
          <img src="src/assets/blog-desktop.svg" alt="blog" />
        </div>
      </div>
      <Carousel autoplay className={styles.carrousel} arrows infinite={true}>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_Assinatura.png" alt="assinatura" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_Blog.jpg" alt="blog" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_Brinquedos.gif" alt="brinquedos" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_diferenciaisBT.gif" alt="diferenciais" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_Geracao.jpg" alt="geração" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_Inverno.jpg" alt="inverno" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_Mantas.jpg" alt="mantas" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_paginaPromocoes.jpg" alt="promoções" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_Racao.gif" alt="ração" />
        </div>
        <div className={styles.carrouselItem}>
          <img src="src/assets/Home_Tapetes.jpg" alt="tapetes" />
        </div>
      </Carousel>
      <div className={styles.cards}>
        <div className={styles.cardItem}>
          <ReloadOutlined className={styles.cardIcon} />
          <div>
            <h6>Receba em Horas</h6>
            <p>ver regras</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <TruckOutlined className={styles.cardIcon} />
          <div>
            <h6>Frete Grátis Brasil</h6>
            <p>confira</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <CreditCardOutlined className={styles.cardIcon} />
          <div>
            <h6>Até 10x Sem Juros</h6>
            <p>ver regras</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <ShopOutlined className={styles.cardIcon} />
          <div>
            <h6>Retire e Troque na Loja</h6>
            <p>saiba mais</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;
