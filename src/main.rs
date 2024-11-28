use axum::http::Method;
use axum::Router;
use dotenv::dotenv;
use tower_http::cors::{Any, CorsLayer};
use tower_http::services::{ServeDir, ServeFile};
use tracing_subscriber::filter::LevelFilter;

#[tokio::main]
async fn main() {
    dotenv().ok().unwrap();
    tracing_subscriber::fmt()
        .with_max_level(LevelFilter::DEBUG)
        .init();

    let cors =
        CorsLayer::new()
            .allow_origin(Any)
            .allow_methods([Method::GET, Method::POST, Method::PUT]);

    let router = Router::new().layer(cors).fallback_service(routes_static());

    let listener = tokio::net::TcpListener::bind("0.0.0.0:80").await.unwrap();
    axum::serve(listener, router).await.unwrap();
}

fn routes_static() -> Router {
    Router::new().nest_service(
        "/",
        ServeDir::new("assets").not_found_service(ServeFile::new("assets/index.html")),
    )
}
