import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ReviewService } from 'src/review/review.service';

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private reviewService: ReviewService,
  ) {}

  findAll(searchTerm?: string) {
    return this.prisma.product.findMany(
      searchTerm
        ? {
            where: {
              OR: [
                {
                  name: {
                    contains: searchTerm,
                  },
                },
                {
                  description: {
                    contains: searchTerm,
                  },
                },
              ],
            },
          }
        : undefined,
    );
  }

  async findById(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        reviews: true,
      },
    });

    if (!product) throw new NotFoundException('product not faund!');

    return product
  }

  async findBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        slug,
      },
    });
    if (!product) throw new NotFoundException('product not faund!');
    return product;
  }

  findRelative(currentProductId: number) {
    // ищем все товары где id не равен текущему ProductId
    return this.prisma.product.findMany({
      where: {
        id: {
          not: currentProductId,
        },
      },
    });
  }
}
