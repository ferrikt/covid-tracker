import * as React from 'react';
import { Link, Heading, Text, Box, Flex } from 'theme-ui';
import { useNewsData } from '../hooks/useNewsData';
import Loading from './Loading';

interface IProps {}

const News: React.SFC<IProps> = () => {
    const [isLoading, error, newsData] = useNewsData();
    return isLoading ? (
        <Loading />
    ) : (
        <>
            {newsData && newsData.length > 0 && (
                <Flex
                    sx={{
                        overflowY: 'scroll',
                        flexDirection: 'column'
                    }}
                >
                    {newsData.map((news, i) => (
                        <Box
                            sx={{
                                border: '1px gray solid',
                                borderRadius: '5px',
                                p: 2,
                                display: 'flex'
                            }}
                        >
                            <Link key={i} href={news.link} target="_blank" sx={{ textDecoration: 'none' }}>
                                <Text
                                    sx={{
                                        color: 'gray.10',
                                        mb: 1,
                                        fontSize: 'sm',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {news.title}
                                </Text>
                                <Text sx={{ color: 'gray.10', fontSize: 'xs' }}>
                                    {news.source} | {news.date}
                                </Text>
                            </Link>
                        </Box>
                    ))}
                </Flex>
            )}
        </>
    );
};
export default News;
