import styled from 'styled-components'
// import { IconFont } from '../../components/common/IconFont'
import DetailHeader from '../../components/common/Layout/Header/DetailHeader'
import icon from '../../assets/image/icon.png'
import { IconFont } from '../../components/common/IconFont'
import api_bg from '../../assets/image/api_bg.png'

export type LeftMenuProps = { width?: string; height?: string }
const LeftMenu = styled.div<LeftMenuProps>`
  width: 284px;
  height: ${(props) => props.height};
  border: 1px solid #e6e6e6;
  align-items: center;
  padding-left: 24px;
  border-bottom: none;
`
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`

const menuData = [
  {
    title: 'General Topics',
    list: [
      'General Concepts',
      'API Contract',
      'Limits',
      'Common Types',
      'Message Types',
      'Errors',
      'Query Predicates',
      'Discount Predicates',
      'Discount Predicate Field Identifiers',
      'Machine Learning',
      'GraphQL API',
    ],
  },
  {
    title: 'Authorization',
    list: ['Authorization', 'Scopes'],
  },
  {
    title: 'Product Catalog',
    list: [
      'Product Categories',
      'Shop Category',
      'Image Search',
      'Products',
      'Product Selections',
      'Product Projections',
      'Product Projections Search',
      'Product Suggestions',
      'Bundle Products',
      'Inventory',
      'Reviews',
    ],
  },
  {
    title: 'Pricing & Discounts',
    list: ['Tax Categories', 'Product Discounts', 'Cart Discounts', 'Discount Codes', ''],
  },
]
export default function Detail() {
  return (
    <div>
      <DetailHeader />
      <div className="flex">
        <div>
          <LeftMenu height="70px" className="flex">
            <Icon src={icon} />
            <div className="text-am_333333 text-am22">HTTP API</div>
          </LeftMenu>
          <LeftMenu height="70px" className="flex">
            <span className="underline text-am_568300 text-am16">Release notes</span>
            <IconFont type="icon-a-bianzu41" />
          </LeftMenu>
          <LeftMenu className="pr-am24">
            {menuData.map((item) => (
              <div key={item.title} className="text-left border-b border-gray-500 mt-am20">
                <p className="text-am16 text-am_333333 font-bold">{item.title}</p>
                {item.list.map((child) => (
                  <p className="text-am_666666 text-am14 leading-am26" key={child}>
                    {child}
                  </p>
                ))}
              </div>
            ))}
          </LeftMenu>
        </div>
        <div>
          <img src={api_bg} alt="" />
        </div>
      </div>
    </div>
  )
}
