import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ReviewService } from 'src/review/review.service';
import { sortType } from './sort.type';

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private reviewService: ReviewService,
  ) {}

  bySearchTerm(searchTerm?: string) {
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

    return product;
  }

  async findBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        reviews: true,
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

  findAll(type?: sortType) {
    const isByPrice = type === 'high-to-low' || type === 'low-to-high';
    const isAsc = type === 'oldest' || type === 'low-to-high';

    const orderBy = {
      [isByPrice ? 'price' : 'createAt']: isAsc ? 'asc' : 'desc',
    } as any;

    return this.prisma.product.findMany({
      orderBy
    });
  }
}
