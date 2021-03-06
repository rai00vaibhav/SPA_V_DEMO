import Link from 'next/link';
class Photos extends React.Component {
    render() {
        const my_card = {
            padding: "0",
            margin: "5px",
            borderRadius: "10px",
            overflow: "hidden"
        }
        //this.props.data.length = 50;
        const photoList = this.props.data.map((element, index) =>
            <div className="col-3" key={element.id}>
                <div className="card" style={my_card}>
                    <img style={{height: '200px', width: '100%', display: 'block'}} src={element.thumbnailUrl} alt="Card image"/>
                    <div className="card-body">
                        <p className="card-text">{element.title}</p>
                    </div>
                    <div className="card-body">
                        <Link href="/photo/[id]" as={`/photo/${element.id}`}><a className="ssr-link">Items</a></Link> &nbsp;
                        <a href="#" className="card-link">Another link</a>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
          );
        return (
            <div className="row">
                {photoList}
            </div>
        )
    }
}
export default Photos;