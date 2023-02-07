import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.review.findMany({
      orderBy: {
        createAt: 'desc',
      },
    });
  }

  async findById(id: number) {
    const review = await this.prisma.review.findUnique({
      where: {
        id,
      },
    });
    if (!review) throw new NotFoundException('review not faund!');
    return review;
  }

  async findAverageValueByProductId(productId: number) {
    return this.prisma.review
      .aggregate({
        where: { productId },
        _avg: { rating: true },
      })
      .then((data) => data._avg);
  }
}
