import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学习慕课网Angular入门实战时创建的', ['电子 产品']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，是我在学习慕课网Angular入门实战时创建的', ['电子 产品']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，是我在学习慕课网Angular入门实战时创建的', ['电子 产品']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是我在学习慕课网Angular入门实战时创建的', ['电子 产品']),
    new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品，是我在学习慕课网Angular入门实战时创建的', ['电子 产品']),
    new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的', ['电子 产品']),
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2018-10-22 22:22:22', '张三', 4, '东西不错'),
    new Comment(2, 1, '2018-11-23 22:22:22', '李四', 4, '东西挺不错'),
    new Comment(3, 1, '2018-12-24 22:22:22', '王五', 4, '东西很不错'),
    new Comment(4, 2, '2018-9-25 22:22:22', '赵六', 4, '东西还不错'),
  ];

  constructor() {
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProduct(productId: number): Product {
    return this.products.find((product) => product.id === productId);
  }
  public getCommentsByProductId(productId: number): Comment[] {
    return this.comments.filter((comment) => comment.productId === productId);
  }
}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public category: string[]) {

  }
}

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {
  }
}
