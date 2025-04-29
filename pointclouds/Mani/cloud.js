Potree.PointCloudOctreeGeometry.load("https://civilsigcomco-my.sharepoint.com/:u:/g/personal/consultoria_civilsig_com_co/EWnj2FSGqKdFsqoYuVebwOMBU7BkVIb-OXi0WJyLqzGhgw?e=JxWJT6").then(geometry => {
    let pointcloud = new Potree.PointCloudOctree(geometry);
    pointcloud.name = "Nube_Ptos_Mani";

    viewer.scene.addPointCloud(pointcloud);
    viewer.scene.view.setView(
        [5077082.85, 2088731.84, -244.45], // Centro estimado de tu nube
        [5081495.03, 2093144.02, 4167.73]  // Punto de vista sugerido
    );
    viewer.fitToScreen();
});